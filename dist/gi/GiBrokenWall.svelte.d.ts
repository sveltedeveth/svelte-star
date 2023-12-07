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
export type GiBrokenWallProps = typeof __propDef.props;
export type GiBrokenWallEvents = typeof __propDef.events;
export type GiBrokenWallSlots = typeof __propDef.slots;
export default class GiBrokenWall extends SvelteComponentTyped<GiBrokenWallProps, GiBrokenWallEvents, GiBrokenWallSlots> {
}
export {};
