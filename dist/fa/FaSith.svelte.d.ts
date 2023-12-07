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
export type FaSithProps = typeof __propDef.props;
export type FaSithEvents = typeof __propDef.events;
export type FaSithSlots = typeof __propDef.slots;
export default class FaSith extends SvelteComponentTyped<FaSithProps, FaSithEvents, FaSithSlots> {
}
export {};
