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
export type FaSalesforceProps = typeof __propDef.props;
export type FaSalesforceEvents = typeof __propDef.events;
export type FaSalesforceSlots = typeof __propDef.slots;
export default class FaSalesforce extends SvelteComponentTyped<FaSalesforceProps, FaSalesforceEvents, FaSalesforceSlots> {
}
export {};
