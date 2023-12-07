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
export type GiTechnoHeartProps = typeof __propDef.props;
export type GiTechnoHeartEvents = typeof __propDef.events;
export type GiTechnoHeartSlots = typeof __propDef.slots;
export default class GiTechnoHeart extends SvelteComponentTyped<GiTechnoHeartProps, GiTechnoHeartEvents, GiTechnoHeartSlots> {
}
export {};
