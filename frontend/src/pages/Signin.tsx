import { Auth } from '../components/auth';
import { Quote } from '../components/quote';
export const Signin = () => {
  return (
    <div  >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="none lg:block">
          <Quote />
        </div>

      </div>
    </div>
  );
}