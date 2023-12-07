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
export type GiGooeyDaemonProps = typeof __propDef.props;
export type GiGooeyDaemonEvents = typeof __propDef.events;
export type GiGooeyDaemonSlots = typeof __propDef.slots;
export default class GiGooeyDaemon extends SvelteComponentTyped<GiGooeyDaemonProps, GiGooeyDaemonEvents, GiGooeyDaemonSlots> {
}
export {};
