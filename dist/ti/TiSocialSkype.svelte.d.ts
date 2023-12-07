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
export type TiSocialSkypeProps = typeof __propDef.props;
export type TiSocialSkypeEvents = typeof __propDef.events;
export type TiSocialSkypeSlots = typeof __propDef.slots;
export default class TiSocialSkype extends SvelteComponentTyped<TiSocialSkypeProps, TiSocialSkypeEvents, TiSocialSkypeSlots> {
}
export {};
