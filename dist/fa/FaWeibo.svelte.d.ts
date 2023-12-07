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
export type FaWeiboProps = typeof __propDef.props;
export type FaWeiboEvents = typeof __propDef.events;
export type FaWeiboSlots = typeof __propDef.slots;
export default class FaWeibo extends SvelteComponentTyped<FaWeiboProps, FaWeiboEvents, FaWeiboSlots> {
}
export {};
