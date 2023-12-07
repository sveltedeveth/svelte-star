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
export type FaMailchimpProps = typeof __propDef.props;
export type FaMailchimpEvents = typeof __propDef.events;
export type FaMailchimpSlots = typeof __propDef.slots;
export default class FaMailchimp extends SvelteComponentTyped<FaMailchimpProps, FaMailchimpEvents, FaMailchimpSlots> {
}
export {};
