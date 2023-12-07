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
export type GiTvRemoteProps = typeof __propDef.props;
export type GiTvRemoteEvents = typeof __propDef.events;
export type GiTvRemoteSlots = typeof __propDef.slots;
export default class GiTvRemote extends SvelteComponentTyped<GiTvRemoteProps, GiTvRemoteEvents, GiTvRemoteSlots> {
}
export {};
