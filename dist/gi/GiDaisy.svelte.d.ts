import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiDaisyProps = typeof __propDef.props;
export type GiDaisyEvents = typeof __propDef.events;
export type GiDaisySlots = typeof __propDef.slots;
export default class GiDaisy extends SvelteComponentTyped<GiDaisyProps, GiDaisyEvents, GiDaisySlots> {
}
export {};
