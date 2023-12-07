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
export type FaFacebookMessengerProps = typeof __propDef.props;
export type FaFacebookMessengerEvents = typeof __propDef.events;
export type FaFacebookMessengerSlots = typeof __propDef.slots;
export default class FaFacebookMessenger extends SvelteComponentTyped<FaFacebookMessengerProps, FaFacebookMessengerEvents, FaFacebookMessengerSlots> {
}
export {};
