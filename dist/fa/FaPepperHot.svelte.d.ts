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
export type FaPepperHotProps = typeof __propDef.props;
export type FaPepperHotEvents = typeof __propDef.events;
export type FaPepperHotSlots = typeof __propDef.slots;
export default class FaPepperHot extends SvelteComponentTyped<FaPepperHotProps, FaPepperHotEvents, FaPepperHotSlots> {
}
export {};
