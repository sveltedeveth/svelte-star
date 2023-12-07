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
export type GiShadowFollowerProps = typeof __propDef.props;
export type GiShadowFollowerEvents = typeof __propDef.events;
export type GiShadowFollowerSlots = typeof __propDef.slots;
export default class GiShadowFollower extends SvelteComponentTyped<GiShadowFollowerProps, GiShadowFollowerEvents, GiShadowFollowerSlots> {
}
export {};
