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
export type GiStoneWallProps = typeof __propDef.props;
export type GiStoneWallEvents = typeof __propDef.events;
export type GiStoneWallSlots = typeof __propDef.slots;
export default class GiStoneWall extends SvelteComponentTyped<GiStoneWallProps, GiStoneWallEvents, GiStoneWallSlots> {
}
export {};
