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
export type GiBrickWallProps = typeof __propDef.props;
export type GiBrickWallEvents = typeof __propDef.events;
export type GiBrickWallSlots = typeof __propDef.slots;
export default class GiBrickWall extends SvelteComponentTyped<GiBrickWallProps, GiBrickWallEvents, GiBrickWallSlots> {
}
export {};
