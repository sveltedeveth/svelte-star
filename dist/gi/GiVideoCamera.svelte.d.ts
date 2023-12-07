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
export type GiVideoCameraProps = typeof __propDef.props;
export type GiVideoCameraEvents = typeof __propDef.events;
export type GiVideoCameraSlots = typeof __propDef.slots;
export default class GiVideoCamera extends SvelteComponentTyped<GiVideoCameraProps, GiVideoCameraEvents, GiVideoCameraSlots> {
}
export {};
