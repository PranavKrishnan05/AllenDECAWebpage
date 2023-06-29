import Breadcrumb from "@/components/Common/Breadcrumb";

const Calendar = () => {
  return (
    <>
      <Breadcrumb
        pageName="Calendar"
        description="Take a look at all the events our chapter is holding!"
      />

      <section className="pt-[120px] pb-[120px]">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Keep up with all of our events!
</h2>




<div data-tockify-component="calendar" data-tockify-calendar="pranav.krishnan"></div>
<script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
      
      </section>
    </>
  );
};

export default Calendar;
