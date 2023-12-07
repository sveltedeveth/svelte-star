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
export type GiShadowGraspProps = typeof __propDef.props;
export type GiShadowGraspEvents = typeof __propDef.events;
export type GiShadowGraspSlots = typeof __propDef.slots;
export default class GiShadowGrasp extends SvelteComponentTyped<GiShadowGraspProps, GiShadowGraspEvents, GiShadowGraspSlots> {
}
export {};
