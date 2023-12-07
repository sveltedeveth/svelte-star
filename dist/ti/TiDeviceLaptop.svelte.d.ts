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
export type TiDeviceLaptopProps = typeof __propDef.props;
export type TiDeviceLaptopEvents = typeof __propDef.events;
export type TiDeviceLaptopSlots = typeof __propDef.slots;
export default class TiDeviceLaptop extends SvelteComponentTyped<TiDeviceLaptopProps, TiDeviceLaptopEvents, TiDeviceLaptopSlots> {
}
export {};
