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
export type GiTargetLaserProps = typeof __propDef.props;
export type GiTargetLaserEvents = typeof __propDef.events;
export type GiTargetLaserSlots = typeof __propDef.slots;
export default class GiTargetLaser extends SvelteComponentTyped<GiTargetLaserProps, GiTargetLaserEvents, GiTargetLaserSlots> {
}
export {};
