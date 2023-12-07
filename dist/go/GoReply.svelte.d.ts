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
export type GoReplyProps = typeof __propDef.props;
export type GoReplyEvents = typeof __propDef.events;
export type GoReplySlots = typeof __propDef.slots;
export default class GoReply extends SvelteComponentTyped<GoReplyProps, GoReplyEvents, GoReplySlots> {
}
export {};
