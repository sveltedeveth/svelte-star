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
export type GiWalkingTurretProps = typeof __propDef.props;
export type GiWalkingTurretEvents = typeof __propDef.events;
export type GiWalkingTurretSlots = typeof __propDef.slots;
export default class GiWalkingTurret extends SvelteComponentTyped<GiWalkingTurretProps, GiWalkingTurretEvents, GiWalkingTurretSlots> {
}
export {};
