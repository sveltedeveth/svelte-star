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
export type GiCurvyKnifeProps = typeof __propDef.props;
export type GiCurvyKnifeEvents = typeof __propDef.events;
export type GiCurvyKnifeSlots = typeof __propDef.slots;
export default class GiCurvyKnife extends SvelteComponentTyped<GiCurvyKnifeProps, GiCurvyKnifeEvents, GiCurvyKnifeSlots> {
}
export {};
