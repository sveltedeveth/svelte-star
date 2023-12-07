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
export type FaSlackProps = typeof __propDef.props;
export type FaSlackEvents = typeof __propDef.events;
export type FaSlackSlots = typeof __propDef.slots;
export default class FaSlack extends SvelteComponentTyped<FaSlackProps, FaSlackEvents, FaSlackSlots> {
}
export {};
