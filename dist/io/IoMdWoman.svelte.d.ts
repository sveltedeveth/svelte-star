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
export type IoMdWomanProps = typeof __propDef.props;
export type IoMdWomanEvents = typeof __propDef.events;
export type IoMdWomanSlots = typeof __propDef.slots;
export default class IoMdWoman extends SvelteComponentTyped<IoMdWomanProps, IoMdWomanEvents, IoMdWomanSlots> {
}
export {};
