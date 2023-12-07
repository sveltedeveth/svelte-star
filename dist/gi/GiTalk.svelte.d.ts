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
export type GiTalkProps = typeof __propDef.props;
export type GiTalkEvents = typeof __propDef.events;
export type GiTalkSlots = typeof __propDef.slots;
export default class GiTalk extends SvelteComponentTyped<GiTalkProps, GiTalkEvents, GiTalkSlots> {
}
export {};
