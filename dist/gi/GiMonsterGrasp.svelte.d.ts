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
export type GiMonsterGraspProps = typeof __propDef.props;
export type GiMonsterGraspEvents = typeof __propDef.events;
export type GiMonsterGraspSlots = typeof __propDef.slots;
export default class GiMonsterGrasp extends SvelteComponentTyped<GiMonsterGraspProps, GiMonsterGraspEvents, GiMonsterGraspSlots> {
}
export {};
