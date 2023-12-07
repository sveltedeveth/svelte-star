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
export type DiMailchimpProps = typeof __propDef.props;
export type DiMailchimpEvents = typeof __propDef.events;
export type DiMailchimpSlots = typeof __propDef.slots;
export default class DiMailchimp extends SvelteComponentTyped<DiMailchimpProps, DiMailchimpEvents, DiMailchimpSlots> {
}
export {};
