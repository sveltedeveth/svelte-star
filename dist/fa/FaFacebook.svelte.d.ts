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
export type FaFacebookProps = typeof __propDef.props;
export type FaFacebookEvents = typeof __propDef.events;
export type FaFacebookSlots = typeof __propDef.slots;
export default class FaFacebook extends SvelteComponentTyped<FaFacebookProps, FaFacebookEvents, FaFacebookSlots> {
}
export {};
