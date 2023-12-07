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
export type GiSpiderWebProps = typeof __propDef.props;
export type GiSpiderWebEvents = typeof __propDef.events;
export type GiSpiderWebSlots = typeof __propDef.slots;
export default class GiSpiderWeb extends SvelteComponentTyped<GiSpiderWebProps, GiSpiderWebEvents, GiSpiderWebSlots> {
}
export {};
