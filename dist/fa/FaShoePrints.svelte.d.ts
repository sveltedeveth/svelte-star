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
export type FaShoePrintsProps = typeof __propDef.props;
export type FaShoePrintsEvents = typeof __propDef.events;
export type FaShoePrintsSlots = typeof __propDef.slots;
export default class FaShoePrints extends SvelteComponentTyped<FaShoePrintsProps, FaShoePrintsEvents, FaShoePrintsSlots> {
}
export {};
