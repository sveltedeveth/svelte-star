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
export type GiCrystalBallProps = typeof __propDef.props;
export type GiCrystalBallEvents = typeof __propDef.events;
export type GiCrystalBallSlots = typeof __propDef.slots;
export default class GiCrystalBall extends SvelteComponentTyped<GiCrystalBallProps, GiCrystalBallEvents, GiCrystalBallSlots> {
}
export {};
