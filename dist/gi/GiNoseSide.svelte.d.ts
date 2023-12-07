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
export type GiNoseSideProps = typeof __propDef.props;
export type GiNoseSideEvents = typeof __propDef.events;
export type GiNoseSideSlots = typeof __propDef.slots;
export default class GiNoseSide extends SvelteComponentTyped<GiNoseSideProps, GiNoseSideEvents, GiNoseSideSlots> {
}
export {};
