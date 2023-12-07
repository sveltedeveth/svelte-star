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
export type GiDefensiveWallProps = typeof __propDef.props;
export type GiDefensiveWallEvents = typeof __propDef.events;
export type GiDefensiveWallSlots = typeof __propDef.slots;
export default class GiDefensiveWall extends SvelteComponentTyped<GiDefensiveWallProps, GiDefensiveWallEvents, GiDefensiveWallSlots> {
}
export {};
