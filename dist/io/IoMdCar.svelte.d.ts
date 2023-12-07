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
export type IoMdCarProps = typeof __propDef.props;
export type IoMdCarEvents = typeof __propDef.events;
export type IoMdCarSlots = typeof __propDef.slots;
export default class IoMdCar extends SvelteComponentTyped<IoMdCarProps, IoMdCarEvents, IoMdCarSlots> {
}
export {};
