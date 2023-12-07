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
export type GiStarSwirlProps = typeof __propDef.props;
export type GiStarSwirlEvents = typeof __propDef.events;
export type GiStarSwirlSlots = typeof __propDef.slots;
export default class GiStarSwirl extends SvelteComponentTyped<GiStarSwirlProps, GiStarSwirlEvents, GiStarSwirlSlots> {
}
export {};
