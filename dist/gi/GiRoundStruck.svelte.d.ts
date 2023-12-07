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
export type GiRoundStruckProps = typeof __propDef.props;
export type GiRoundStruckEvents = typeof __propDef.events;
export type GiRoundStruckSlots = typeof __propDef.slots;
export default class GiRoundStruck extends SvelteComponentTyped<GiRoundStruckProps, GiRoundStruckEvents, GiRoundStruckSlots> {
}
export {};
