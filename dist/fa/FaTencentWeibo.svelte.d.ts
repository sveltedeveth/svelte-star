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
export type FaTencentWeiboProps = typeof __propDef.props;
export type FaTencentWeiboEvents = typeof __propDef.events;
export type FaTencentWeiboSlots = typeof __propDef.slots;
export default class FaTencentWeibo extends SvelteComponentTyped<FaTencentWeiboProps, FaTencentWeiboEvents, FaTencentWeiboSlots> {
}
export {};
