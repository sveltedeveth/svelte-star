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
export type FaSafariProps = typeof __propDef.props;
export type FaSafariEvents = typeof __propDef.events;
export type FaSafariSlots = typeof __propDef.slots;
export default class FaSafari extends SvelteComponentTyped<FaSafariProps, FaSafariEvents, FaSafariSlots> {
}
export {};
