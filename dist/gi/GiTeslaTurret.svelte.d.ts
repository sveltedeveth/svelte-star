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
export type GiTeslaTurretProps = typeof __propDef.props;
export type GiTeslaTurretEvents = typeof __propDef.events;
export type GiTeslaTurretSlots = typeof __propDef.slots;
export default class GiTeslaTurret extends SvelteComponentTyped<GiTeslaTurretProps, GiTeslaTurretEvents, GiTeslaTurretSlots> {
}
export {};
