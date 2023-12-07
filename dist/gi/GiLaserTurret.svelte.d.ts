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
export type GiLaserTurretProps = typeof __propDef.props;
export type GiLaserTurretEvents = typeof __propDef.events;
export type GiLaserTurretSlots = typeof __propDef.slots;
export default class GiLaserTurret extends SvelteComponentTyped<GiLaserTurretProps, GiLaserTurretEvents, GiLaserTurretSlots> {
}
export {};
