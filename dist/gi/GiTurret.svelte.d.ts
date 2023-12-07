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
export type GiTurretProps = typeof __propDef.props;
export type GiTurretEvents = typeof __propDef.events;
export type GiTurretSlots = typeof __propDef.slots;
export default class GiTurret extends SvelteComponentTyped<GiTurretProps, GiTurretEvents, GiTurretSlots> {
}
export {};
