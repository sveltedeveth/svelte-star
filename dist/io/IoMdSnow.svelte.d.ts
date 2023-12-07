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
export type IoMdSnowProps = typeof __propDef.props;
export type IoMdSnowEvents = typeof __propDef.events;
export type IoMdSnowSlots = typeof __propDef.slots;
export default class IoMdSnow extends SvelteComponentTyped<IoMdSnowProps, IoMdSnowEvents, IoMdSnowSlots> {
}
export {};
