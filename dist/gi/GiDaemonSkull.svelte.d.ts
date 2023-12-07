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
export type GiDaemonSkullProps = typeof __propDef.props;
export type GiDaemonSkullEvents = typeof __propDef.events;
export type GiDaemonSkullSlots = typeof __propDef.slots;
export default class GiDaemonSkull extends SvelteComponentTyped<GiDaemonSkullProps, GiDaemonSkullEvents, GiDaemonSkullSlots> {
}
export {};
