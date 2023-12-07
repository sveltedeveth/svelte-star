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
export type MdViewAgendaProps = typeof __propDef.props;
export type MdViewAgendaEvents = typeof __propDef.events;
export type MdViewAgendaSlots = typeof __propDef.slots;
export default class MdViewAgenda extends SvelteComponentTyped<MdViewAgendaProps, MdViewAgendaEvents, MdViewAgendaSlots> {
}
export {};
