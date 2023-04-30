import styles from './index.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import getMinAndMaxDeliveryDates from '../../utils/utils';
import { FormValues } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { addCard } from '../../store/slices/formSlice';
import React from 'react';

function Form() {
  const dispatch = useAppDispatch();

  const { currentDate, maxDeliveryDate } = getMinAndMaxDeliveryDates();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    defaultValues: {
      firstName: '',
      deliveryDate: '',
      product: '',
      payment: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const file = data.image[0];
    const reader = new FileReader();
    if (file instanceof File) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        const image = reader.result;
        if (typeof image === 'string') {
          alert(`${data.firstName}, your order has been accepted!`);
          dispatch(addCard({ ...data, image: image }));
          reset();
        }
      };
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Your name</span>
          <input
            type="text"
            {...register('firstName', {
              required: 'Required field',
              minLength: { value: 2, message: 'Enter min 2 characters' },
              maxLength: { value: 20, message: 'Enter max 20 characters' },
              pattern: {
                value: /^[A-Z][a-z]{1,20}$/,
                message: 'First character capitalized',
              },
            })}
          />
          <span className={styles.error}>{errors.firstName?.message}</span>
        </label>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Delivery date</span>
          <input
            type="date"
            {...register('deliveryDate', {
              required: 'Required field',
              min: { value: currentDate, message: "Can't order in the past :(" },
              max: { value: maxDeliveryDate, message: '30 days max' },
              setValueAs: (date: string) => new Date(date).getTime(),
            })}
          />
          <span className={styles.error}>{errors.deliveryDate?.message}</span>
        </label>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Headphones</span>
          <select {...register('product', { required: 'Required field' })}>
            <option value="">--Model--</option>
            <option value="Sennheiser Momentum 4 Black">Sennheiser Momentum 4 Black</option>
            <option value="Marshall Minor III Black">Marshall Minor III Black</option>
            <option value="Jabra Elite 2 Navy">Jabra Elite 2 Navy</option>
            <option value="Philips Fidelio L3 Black">Philips Fidelio L3 Black</option>
            <option value="Sony WI-C100 Black">Sony WI-C100 Black</option>
            <option value="Anker Powerconf H700 Blue">Anker Powerconf H700 Blue</option>
          </select>
          <span className={styles.error}>{errors.product?.message}</span>
        </label>
        <p className={styles.flex1}>
          <span className={styles.subtitle}>Additional options</span>
          <label className={styles.flex2}>
            <input
              type="checkbox"
              value="Express delivery"
              {...register('options', { required: 'Required field' })}
            />
            <span>Express delivery</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="checkbox"
              value="Gift wrap"
              {...register('options', { required: 'Required field' })}
            />
            <span>Gift wrap</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="checkbox"
              value="Additional one year warranty"
              {...register('options', { required: 'Required field' })}
            />
            <span>Additional one year warranty</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="checkbox"
              value="Assistance with setup"
              {...register('options', { required: 'Required field' })}
            />
            <span>Assistance with setup</span>
          </label>
          <span className={styles.error}>{errors.options?.message}</span>
        </p>
        <p className={styles.flex1}>
          <span className={styles.subtitle}>Payment method</span>
          <label className={styles.flex2}>
            <input
              type="radio"
              value="Cash upon receipt"
              {...register('payment', { required: 'Required field' })}
            />
            <span>Cash upon receipt</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="radio"
              value="Credit card upon receipt"
              {...register('payment', { required: 'Required field' })}
            />
            <span>Credit card upon receipt</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="radio"
              value="Credit card online"
              {...register('payment', { required: 'Required field' })}
            />
            <span>Credit card online</span>
          </label>
          <label className={styles.flex2}>
            <input
              type="radio"
              value="Bonuses"
              {...register('payment', { required: 'Required field' })}
            />
            <span>Bonuses</span>
          </label>
          <span className={styles.error}>{errors.payment?.message}</span>
        </p>
        <label className={styles.flex1}>
          <span className={styles.subtitle}>Upload any image</span>
          <input
            type="file"
            {...register('image', {
              required: 'Required field',
              validate: {
                size: (fileList) => {
                  if (fileList instanceof FileList) {
                    return (
                      fileList[0].size < 2097152 ||
                      'The maximum file size for uploading is no more than 2 MB'
                    );
                  }
                },
                type: (fileList) => {
                  if (fileList instanceof FileList) {
                    return (
                      ['image/png', 'image/svg+xml', 'image/webp', 'image/jpeg'].includes(
                        fileList[0].type
                      ) || 'Only images!'
                    );
                  }
                },
              },
            })}
          />
          <span className={styles.error}>{errors.image?.message}</span>
        </label>
        <button className={styles.btn} type="submit">
          send
        </button>
      </form>
    </>
  );
}

export default Form;
