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
export type TiSocialFacebookProps = typeof __propDef.props;
export type TiSocialFacebookEvents = typeof __propDef.events;
export type TiSocialFacebookSlots = typeof __propDef.slots;
export default class TiSocialFacebook extends SvelteComponentTyped<TiSocialFacebookProps, TiSocialFacebookEvents, TiSocialFacebookSlots> {
}
export {};
