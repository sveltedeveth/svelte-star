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
export type FaTransgenderProps = typeof __propDef.props;
export type FaTransgenderEvents = typeof __propDef.events;
export type FaTransgenderSlots = typeof __propDef.slots;
export default class FaTransgender extends SvelteComponentTyped<FaTransgenderProps, FaTransgenderEvents, FaTransgenderSlots> {
}
export {};
