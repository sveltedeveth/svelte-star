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
export type IoMdEggProps = typeof __propDef.props;
export type IoMdEggEvents = typeof __propDef.events;
export type IoMdEggSlots = typeof __propDef.slots;
export default class IoMdEgg extends SvelteComponentTyped<IoMdEggProps, IoMdEggEvents, IoMdEggSlots> {
}
export {};
