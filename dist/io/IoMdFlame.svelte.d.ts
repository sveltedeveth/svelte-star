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
export type IoMdFlameProps = typeof __propDef.props;
export type IoMdFlameEvents = typeof __propDef.events;
export type IoMdFlameSlots = typeof __propDef.slots;
export default class IoMdFlame extends SvelteComponentTyped<IoMdFlameProps, IoMdFlameEvents, IoMdFlameSlots> {
}
export {};
