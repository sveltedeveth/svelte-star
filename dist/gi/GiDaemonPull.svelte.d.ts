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
export type GiDaemonPullProps = typeof __propDef.props;
export type GiDaemonPullEvents = typeof __propDef.events;
export type GiDaemonPullSlots = typeof __propDef.slots;
export default class GiDaemonPull extends SvelteComponentTyped<GiDaemonPullProps, GiDaemonPullEvents, GiDaemonPullSlots> {
}
export {};
