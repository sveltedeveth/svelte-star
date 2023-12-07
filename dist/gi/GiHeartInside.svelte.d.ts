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
export type GiHeartInsideProps = typeof __propDef.props;
export type GiHeartInsideEvents = typeof __propDef.events;
export type GiHeartInsideSlots = typeof __propDef.slots;
export default class GiHeartInside extends SvelteComponentTyped<GiHeartInsideProps, GiHeartInsideEvents, GiHeartInsideSlots> {
}
export {};
